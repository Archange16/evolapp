import team1 from "../../public/assets/img/team/team-1.jpg";
import team2 from "../../public/assets/img/team/team-2.jpg";
import team3 from "../../public/assets/img/team/team-3.jpg";
import team4 from "../../public/assets/img/team/team-4.jpg";
import team5 from "../../public/assets/img/team/team-5.jpg";
import team6 from "../../public/assets/img/team/team-6.jpg";

const teamData = [
    {
        id: 'directeur-technique',
        image: team1,
        name: 'Équipe Technique',
        position: 'Directeur Technique',
        mail: 'contact@evolapp.com',
        phone: '(+212) 06 47 810243',
        category: 'founder',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'chef-projet',
        image: team2,
        name: 'Équipe Projet',
        position: 'Chef de Projet Digital',
        mail: 'contact@evolapp.com',
        phone: '(+212) 06 47 810243',
        category: 'manager',
        social_link: [
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'developpeur-senior',
        image: team3,
        name: 'Équipe Développement',
        position: 'Développeur Full-Stack Senior',
        mail: 'contact@evolapp.com',
        phone: '(+212) 06 47 810243',
        category: 'founder',
        social_link: [
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
        ],
    },
    {
        id: 'designer-ux',
        image: team4,
        name: 'Équipe Design',
        position: 'Designer UX/UI & Graphique',
        mail: 'contact@evolapp.com',
        phone: '(+212) 06 47 810243',
        category: 'designer',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
        ],
    },
    {
        id: 'marketing-digital',
        image: team5,
        name: 'Équipe Marketing',
        position: 'Responsable Marketing Digital',
        mail: 'contact@evolapp.com',
        phone: '(+212) 06 47 810243',
        category: 'manager',
        social_link: [
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
        ],
    },
    {
        id: 'expert-ia',
        image: team6,
        name: 'Équipe Innovation',
        position: 'Expert en Intelligence Artificielle',
        mail: 'contact@evolapp.com',
        phone: '(+212) 06 47 810243',
        category: 'founder',
        social_link: [
            { link: 'https://facebook.com', target: '_blank', icon: <i className="fab fa-facebook-f"></i> },
            { link: 'https://twitter.com', target: '_blank', icon: <i className="fa-brands fa-x-twitter"></i> },
            { link: 'https://linkedin.com', target: '_blank', icon: <i className="fab fa-linkedin-in"></i> },
        ],
    },
];

export default teamData;