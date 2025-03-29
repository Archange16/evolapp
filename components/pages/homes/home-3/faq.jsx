import React, { useState } from 'react';
import Count from '../../common/count';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const faqs = [
        {
            question: "Comment HAT aide-t-elle les entreprises à intégrer les énergies renouvelables ?",
            answer: "Chez HAT, nous accompagnons les entreprises à chaque étape de la transition énergétique, de l’étude de faisabilité à la mise en œuvre des solutions solaires photovoltaïques. Nous évaluons vos besoins énergétiques spécifiques et proposons des solutions sur mesure qui permettent de réduire vos coûts énergétiques tout en favorisant un avenir plus durable."
        },
        {
            question: "Quels sont les avantages de la maintenance proactive des équipements électriques ?",
            answer: "La maintenance proactive permet de prévenir les pannes et d'optimiser la durée de vie de vos équipements électriques. Chez HAT, nos services de maintenance régulière garantissent que vos installations fonctionnent à leur meilleure capacité, réduisent les risques de dysfonctionnements imprévus et assurent une performance continue, ce qui est essentiel pour maximiser vos investissements."
        },
        {
            question: "En quoi consiste votre service de gestion des déchets et comment peut-il bénéficier à mon entreprise ?",
            answer: "Notre service de gestion des déchets vise à optimiser le traitement des déchets industriels et électroniques tout en respectant les normes environnementales strictes. Nous proposons des solutions écologiques et efficaces qui réduisent l'empreinte écologique de votre entreprise, vous aident à respecter les réglementations et peuvent générer des économies grâce au recyclage et à la réduction des déchets."
        },
    ];
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
        <div className="faq__two section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="faq__two-title">
                            <span className="subtitle-one">Posez la question</span>
                            <h2>Démêler les Complexités de <span className="highlighted-two">l'Énergie</span> et de la Durabilité</h2>
                            <p>Les services d'énergie renouvelable et de maintenance d’équipements peuvent transformer votre entreprise, optimiser vos processus et favoriser la croissance durable. Découvrez ci-dessous les réponses aux questions les plus fréquemment posées pour mieux comprendre nos services et leur impact sur votre projet.</p>
                        </div>
                        <div className="award">
                            <div className="award-wrapper">
                                <div className="award-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <div className="award-count">
                                    <h3 className="counter"><Count number={20}/></h3>
                                    <h3>+</h3>
                                </div>
                                <span>Winning award</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="faq-collapse">
                            {faqs.map((faq, index) => (
                                <div className="faq-collapse-item" key={index}>
                                    <div className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="faq-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                                            <h6>{faq.question}</h6>
                                            <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </div>
                                        <div className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>	
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Faq;