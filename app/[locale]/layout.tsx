"use client";

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';  // Importez useParams depuis 'next/navigation'
import "./globals.css";
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const params = useParams();  // Utilisez useParams pour récupérer les paramètres

    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    // Vérifiez si params.locale est une chaîne de caractères avant de l'utiliser
    const locale = typeof params?.locale === "string" ? params.locale : "en";  // "en" comme valeur par défaut

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" type="image/png" href="../favicon.ico" />
            </head>
            <body>
                <Providers locale={locale}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
