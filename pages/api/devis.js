// pages/api/devis.js

import prisma from '../../lib/prisma';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Méthode non autorisée' });
    }

    const {
        firstName,
        lastName,
        email,
        phone,
        company,
        website,
        services,
        message
    } = req.body;

    if (!firstName || !lastName || !email || !phone || !services || !message) {
        return res.status(400).json({ message: 'Champs obligatoires manquants.' });
    }

    try {
        // Sauvegarde dans la base de données Supabase via Prisma
        const devis = await prisma.devis.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                company: company || null,
                website: website || null,
                services: Array.isArray(services) ? services : [],
                message,
            },
        });

        // Envoi d'email (optionnel - si SMTP est configuré)
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                });

                const mailOptions = {
                    from: `"${firstName} ${lastName}" <${email}>`,
                    to: 'evolapp10@gmail.com',
                    subject: 'Nouvelle demande de devis',
                    html: `
                        <h2>Nouvelle demande de devis</h2>
                        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Téléphone:</strong> ${phone}</p>
                        <p><strong>Entreprise:</strong> ${company || 'Non précisé'}</p>
                        <p><strong>Site Web:</strong> ${website || 'Non précisé'}</p>
                        <p><strong>Services demandés:</strong> ${services.join(', ')}</p>
                        <p><strong>Message:</strong><br />${message}</p>
                    `,
                };

                await transporter.sendMail(mailOptions);
            } catch (emailError) {
                console.error('Erreur d\'envoi email (non bloquant):', emailError);
            }
        }

        return res.status(200).json({ 
            message: 'Demande de devis enregistrée avec succès',
            id: devis.id 
        });

    } catch (error) {
        console.error('Erreur de sauvegarde:', error);
        return res.status(500).json({ message: "Erreur lors de l'enregistrement de la demande." });
    }
}
