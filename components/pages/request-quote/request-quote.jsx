"use client"

const RequestQuoteMain = () => {
    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form action="#">
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label htmlFor="first-name">Prénom *</label>
                            <input type="text" id="first-name" placeholder="Jean" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="last-name">Nom *</label>
                            <input type="text" id="last-name" placeholder="Dupont" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="email">Adresse e-mail *</label>
                            <input type="email" id="email" placeholder="exemple@email.com" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="number">Téléphone *</label>
                            <input type="text" id="number" placeholder="+242 06 123 4567" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="company">Entreprise / Organisation</label>
                            <input type="text" id="company" placeholder="Nom de l'entreprise (facultatif)" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="website">Site web (si existant)</label>
                            <input type="text" id="website" placeholder="http://votresite.com" />
                        </div>
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>Quels services vous intéressent ? *</span>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="web-dev" />
                            <label htmlFor="web-dev">Création de site web</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="app-dev" />
                            <label htmlFor="app-dev">Développement d’application mobile</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="design" />
                            <label htmlFor="design">Design graphique</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="digital-marketing" />
                            <label htmlFor="digital-marketing">Marketing digital</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="ai" />
                            <label htmlFor="ai">Intégration de solutions IA</label>
                        </div>
                    </div>
                    <label htmlFor="message" className="mb-2">Message *</label>
                    <textarea id="message" placeholder="Décrivez brièvement votre besoin ou votre projet..."></textarea>
                    <input type="submit" value="Envoyer la demande" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;
