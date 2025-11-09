"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth, logout } from '@/lib/auth';

const AdminPage = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('contacts-accueil');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  // Données
  const [contactsAccueil, setContactsAccueil] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [devis, setDevis] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [stats, setStats] = useState({
    total: 0,
    contactsAccueil: 0,
    contacts: 0,
    devis: 0,
    newsletter: 0
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Vérifier l'authentification
    checkAuth().then((auth) => {
      if (!auth) {
        router.push('/admin/login');
      } else {
        setAuthenticated(true);
        setLoading(false);
        loadData();
      }
    });
  }, [router]);

  const loadData = async () => {
    setDataLoading(true);
    try {
      const [accueilRes, contactsRes, devisRes, newsletterRes] = await Promise.all([
        fetch('/api/admin/contacts-accueil', { credentials: 'include' }),
        fetch('/api/admin/contacts', { credentials: 'include' }),
        fetch('/api/admin/devis', { credentials: 'include' }),
        fetch('/api/admin/newsletter', { credentials: 'include' }),
      ]);

      let accueilData = [];
      let contactsData = [];
      let devisData = [];
      let newsletterData = [];

      if (accueilRes.ok) {
        accueilData = await accueilRes.json();
        setContactsAccueil(accueilData);
      }
      if (contactsRes.ok) {
        contactsData = await contactsRes.json();
        setContacts(contactsData);
      }
      if (devisRes.ok) {
        devisData = await devisRes.json();
        setDevis(devisData);
      }
      if (newsletterRes.ok) {
        newsletterData = await newsletterRes.json();
        setNewsletter(newsletterData);
      }

      // Calculer les statistiques avec les données chargées
      setStats({
        total: accueilData.length + contactsData.length + devisData.length + newsletterData.length,
        contactsAccueil: accueilData.length,
        contacts: contactsData.length,
        devis: devisData.length,
        newsletter: newsletterData.length
      });
    } catch (error) {
      console.error('Erreur lors du chargement des données:', error);
    } finally {
      setDataLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  const handleRefresh = () => {
    loadData();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}>
        <div style={{ color: 'white', fontSize: '18px' }}>
          <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
          Chargement...
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return null;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: isMobile ? '16px 0' : '24px 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        marginBottom: isMobile ? '20px' : '30px'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto', 
          padding: isMobile ? '0 15px' : '0 20px', 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between', 
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: isMobile ? '16px' : '0'
        }}>
          <div>
            <h1 style={{ 
              margin: 0, 
              color: 'white', 
              fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px', 
              fontWeight: '700', 
              marginBottom: '4px' 
            }}>
              <i className="fas fa-tachometer-alt" style={{ marginRight: isMobile ? '8px' : '12px' }}></i>
              Administration Evolapp
            </h1>
            <p style={{ 
              margin: 0, 
              color: 'rgba(255,255,255,0.9)', 
              fontSize: isMobile ? '12px' : '14px' 
            }}>
              Tableau de bord des formulaires
            </p>
          </div>
          <div style={{ 
            display: 'flex', 
            gap: isMobile ? '8px' : '12px', 
            alignItems: 'center',
            flexWrap: 'wrap',
            width: isMobile ? '100%' : 'auto'
          }}>
            <button
              onClick={handleRefresh}
              disabled={dataLoading}
              style={{
                padding: isMobile ? '8px 16px' : '10px 20px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                flex: isMobile ? '1' : 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
              }}
            >
              <i className={`fas fa-sync-alt ${dataLoading ? 'fa-spin' : ''}`}></i>
              Actualiser
            </button>
            <button
              onClick={handleLogout}
              style={{
                padding: isMobile ? '8px 16px' : '10px 20px',
                backgroundColor: 'rgba(220, 53, 69, 0.9)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(220, 53, 69, 0.3)',
                flex: isMobile ? '1' : 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(220, 53, 69, 1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(220, 53, 69, 0.9)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="fas fa-sign-out-alt"></i>
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: isMobile ? '0 15px 30px' : '0 20px 40px' 
      }}>
        {/* Statistiques */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile 
            ? '1fr' 
            : isTablet 
            ? 'repeat(2, 1fr)' 
            : 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: isMobile ? '12px' : '20px',
          marginBottom: isMobile ? '20px' : '30px'
        }}>
          <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: isMobile ? '16px' : '24px',
          borderRadius: '12px',
          color: 'white',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
        }}>
            <div style={{ 
              fontSize: isMobile ? '12px' : '14px', 
              opacity: 0.9, 
              marginBottom: '8px' 
            }}>
              <i className="fas fa-chart-line" style={{ marginRight: '8px' }}></i>
              Total
            </div>
            <div style={{ 
              fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px', 
              fontWeight: '700' 
            }}>
              {stats.total}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            padding: isMobile ? '16px' : '24px',
            borderRadius: '12px',
            color: 'white',
            boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)'
          }}>
            <div style={{ 
              fontSize: isMobile ? '12px' : '14px', 
              opacity: 0.9, 
              marginBottom: '8px' 
            }}>
              <i className="fas fa-home" style={{ marginRight: '8px' }}></i>
              Contacts Accueil
            </div>
            <div style={{ 
              fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px', 
              fontWeight: '700' 
            }}>
              {contactsAccueil.length}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            padding: isMobile ? '16px' : '24px',
            borderRadius: '12px',
            color: 'white',
            boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
          }}>
            <div style={{ 
              fontSize: isMobile ? '12px' : '14px', 
              opacity: 0.9, 
              marginBottom: '8px' 
            }}>
              <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
              Contacts
            </div>
            <div style={{ 
              fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px', 
              fontWeight: '700' 
            }}>
              {contacts.length}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            padding: isMobile ? '16px' : '24px',
            borderRadius: '12px',
            color: 'white',
            boxShadow: '0 4px 15px rgba(67, 233, 123, 0.3)'
          }}>
            <div style={{ 
              fontSize: isMobile ? '12px' : '14px', 
              opacity: 0.9, 
              marginBottom: '8px' 
            }}>
              <i className="fas fa-file-invoice-dollar" style={{ marginRight: '8px' }}></i>
              Devis
            </div>
            <div style={{ 
              fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px', 
              fontWeight: '700' 
            }}>
              {devis.length}
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            padding: isMobile ? '16px' : '24px',
            borderRadius: '12px',
            color: 'white',
            boxShadow: '0 4px 15px rgba(250, 112, 154, 0.3)'
          }}>
            <div style={{ 
              fontSize: isMobile ? '12px' : '14px', 
              opacity: 0.9, 
              marginBottom: '8px' 
            }}>
              <i className="fas fa-newspaper" style={{ marginRight: '8px' }}></i>
              Newsletter
            </div>
            <div style={{ 
              fontSize: isMobile ? '24px' : isTablet ? '28px' : '32px', 
              fontWeight: '700' 
            }}>
              {newsletter.length}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          gap: isMobile ? '8px' : '12px',
          marginBottom: isMobile ? '16px' : '24px',
          flexWrap: 'wrap',
          backgroundColor: 'white',
          padding: isMobile ? '8px' : '12px',
          borderRadius: '12px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          overflowX: isMobile ? 'auto' : 'visible'
        }}>
          <button
            onClick={() => setActiveTab('contacts-accueil')}
            style={{
              padding: isMobile ? '10px 16px' : '12px 24px',
              background: activeTab === 'contacts-accueil' 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : '#f8f9fa',
              color: activeTab === 'contacts-accueil' ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: activeTab === 'contacts-accueil' ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <i className="fas fa-home"></i>
            <span style={{ display: isMobile ? 'none' : 'inline' }}>Contacts Accueil </span>
            <span>({contactsAccueil.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            style={{
              padding: isMobile ? '10px 16px' : '12px 24px',
              background: activeTab === 'contacts' 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : '#f8f9fa',
              color: activeTab === 'contacts' ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: activeTab === 'contacts' ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <i className="fas fa-envelope"></i>
            <span style={{ display: isMobile ? 'none' : 'inline' }}>Contacts </span>
            <span>({contacts.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('devis')}
            style={{
              padding: isMobile ? '10px 16px' : '12px 24px',
              background: activeTab === 'devis' 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : '#f8f9fa',
              color: activeTab === 'devis' ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: activeTab === 'devis' ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <i className="fas fa-file-invoice-dollar"></i>
            <span style={{ display: isMobile ? 'none' : 'inline' }}>Devis </span>
            <span>({devis.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('newsletter')}
            style={{
              padding: isMobile ? '10px 16px' : '12px 24px',
              background: activeTab === 'newsletter' 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : '#f8f9fa',
              color: activeTab === 'newsletter' ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: activeTab === 'newsletter' ? '0 4px 15px rgba(102, 126, 234, 0.3)' : 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <i className="fas fa-newspaper"></i>
            <span style={{ display: isMobile ? 'none' : 'inline' }}>Newsletter </span>
            <span>({newsletter.length})</span>
          </button>
        </div>

        {/* Content */}
        {dataLoading ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: '32px', color: '#667eea', marginBottom: '16px' }}></i>
            <div style={{ color: '#666', fontSize: '16px' }}>Chargement des données...</div>
          </div>
        ) : (
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            padding: isMobile ? '16px' : isTablet ? '20px' : '30px', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
          }}>
            {activeTab === 'contacts-accueil' && (
              <div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  marginBottom: isMobile ? '16px' : '24px',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <h2 style={{ 
                    margin: 0, 
                    color: '#1a1a1a', 
                    fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px', 
                    fontWeight: '700' 
                  }}>
                    <i className="fas fa-home" style={{ marginRight: '12px', color: '#667eea' }}></i>
                    <span style={{ display: isMobile ? 'none' : 'inline' }}>Contacts depuis la page d'accueil</span>
                    <span style={{ display: isMobile ? 'inline' : 'none' }}>Contacts Accueil</span>
                  </h2>
                </div>
                {contactsAccueil.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
                    <i className="fas fa-inbox" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}></i>
                    <p style={{ fontSize: '16px', margin: 0 }}>Aucun contact pour le moment</p>
                  </div>
                ) : (
                  <div style={{ 
                    overflowX: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: '-ms-autohiding-scrollbar'
                  }}>
                    <table style={{ 
                      width: '100%', 
                      borderCollapse: 'collapse',
                      minWidth: isMobile ? '600px' : '100%'
                    }}>
                      <thead>
                        <tr style={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}>
                          <th style={{ 
                            padding: isMobile ? '12px 8px' : '16px', 
                            textAlign: 'left', 
                            fontWeight: '600', 
                            fontSize: isMobile ? '12px' : '14px' 
                          }}>Date</th>
                          <th style={{ 
                            padding: isMobile ? '12px 8px' : '16px', 
                            textAlign: 'left', 
                            fontWeight: '600', 
                            fontSize: isMobile ? '12px' : '14px' 
                          }}>Prénom</th>
                          <th style={{ 
                            padding: isMobile ? '12px 8px' : '16px', 
                            textAlign: 'left', 
                            fontWeight: '600', 
                            fontSize: isMobile ? '12px' : '14px' 
                          }}>Email</th>
                          <th style={{ 
                            padding: isMobile ? '12px 8px' : '16px', 
                            textAlign: 'left', 
                            fontWeight: '600', 
                            fontSize: isMobile ? '12px' : '14px' 
                          }}>Téléphone</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contactsAccueil.map((contact, index) => (
                          <tr 
                            key={contact.id} 
                            style={{ 
                              borderBottom: '1px solid #eee',
                              backgroundColor: index % 2 === 0 ? '#fff' : '#f8f9fa',
                              transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0f4ff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f8f9fa';
                            }}
                          >
                            <td style={{ 
                              padding: isMobile ? '12px 8px' : '16px', 
                              color: '#666', 
                              fontSize: isMobile ? '12px' : '14px' 
                            }}>
                              <i className="fas fa-calendar-alt" style={{ marginRight: '8px', color: '#667eea' }}></i>
                              {isMobile ? formatDate(contact.created_at).split(' ')[0] : formatDate(contact.created_at)}
                            </td>
                            <td style={{ 
                              padding: isMobile ? '12px 8px' : '16px', 
                              color: '#333', 
                              fontWeight: '500',
                              fontSize: isMobile ? '12px' : '14px'
                            }}>{contact.first_name}</td>
                            <td style={{ 
                              padding: isMobile ? '12px 8px' : '16px', 
                              color: '#333',
                              fontSize: isMobile ? '12px' : '14px'
                            }}>
                              <a href={`mailto:${contact.email}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                                {isMobile && contact.email.length > 20 ? contact.email.substring(0, 20) + '...' : contact.email}
                              </a>
                            </td>
                            <td style={{ 
                              padding: isMobile ? '12px 8px' : '16px', 
                              color: '#333',
                              fontSize: isMobile ? '12px' : '14px'
                            }}>
                              <a href={`tel:${contact.phone}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                                {contact.phone}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '24px', fontWeight: '700' }}>
                    <i className="fas fa-envelope" style={{ marginRight: '12px', color: '#667eea' }}></i>
                    Contacts complets
                  </h2>
                </div>
                {contacts.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
                    <i className="fas fa-inbox" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}></i>
                    <p style={{ fontSize: '16px', margin: 0 }}>Aucun contact pour le moment</p>
                  </div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Date</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Nom</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Email</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Téléphone</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Sujet</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((contact, index) => (
                          <tr 
                            key={contact.id} 
                            style={{ 
                              borderBottom: '1px solid #eee',
                              backgroundColor: index % 2 === 0 ? '#fff' : '#f8f9fa',
                              transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0f4ff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f8f9fa';
                            }}
                          >
                            <td style={{ padding: '16px', color: '#666', fontSize: '14px' }}>
                              <i className="fas fa-calendar-alt" style={{ marginRight: '8px', color: '#667eea' }}></i>
                              {formatDate(contact.created_at)}
                            </td>
                            <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>{contact.name}</td>
                            <td style={{ padding: '16px', color: '#333' }}>
                              <a href={`mailto:${contact.email}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                                {contact.email}
                              </a>
                            </td>
                            <td style={{ padding: '16px', color: '#333' }}>
                              <a href={`tel:${contact.phone}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                                {contact.phone}
                              </a>
                            </td>
                            <td style={{ padding: '16px', color: '#666' }}>{contact.subject || '-'}</td>
                            <td style={{ padding: '16px', color: '#666', maxWidth: '300px' }}>{contact.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'devis' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '24px', fontWeight: '700' }}>
                    <i className="fas fa-file-invoice-dollar" style={{ marginRight: '12px', color: '#667eea' }}></i>
                    Demandes de devis
                  </h2>
                </div>
                {devis.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
                    <i className="fas fa-inbox" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}></i>
                    <p style={{ fontSize: '16px', margin: 0 }}>Aucune demande de devis pour le moment</p>
                  </div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Date</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Nom</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Email</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Téléphone</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Entreprise</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Services</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {devis.map((devi, index) => (
                          <tr 
                            key={devi.id} 
                            style={{ 
                              borderBottom: '1px solid #eee',
                              backgroundColor: index % 2 === 0 ? '#fff' : '#f8f9fa',
                              transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0f4ff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f8f9fa';
                            }}
                          >
                            <td style={{ padding: '16px', color: '#666', fontSize: '14px' }}>
                              <i className="fas fa-calendar-alt" style={{ marginRight: '8px', color: '#667eea' }}></i>
                              {formatDate(devi.created_at)}
                            </td>
                            <td style={{ padding: '16px', color: '#333', fontWeight: '500' }}>
                              {devi.first_name} {devi.last_name}
                            </td>
                            <td style={{ padding: '16px', color: '#333' }}>
                              <a href={`mailto:${devi.email}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                                {devi.email}
                              </a>
                            </td>
                            <td style={{ padding: '16px', color: '#333' }}>
                              <a href={`tel:${devi.phone}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                                {devi.phone}
                              </a>
                            </td>
                            <td style={{ padding: '16px', color: '#666' }}>{devi.company || '-'}</td>
                            <td style={{ padding: '16px', color: '#666' }}>
                              {Array.isArray(devi.services) && devi.services.length > 0 ? (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                  {devi.services.map((service, i) => (
                                    <span key={i} style={{
                                      padding: '4px 8px',
                                      backgroundColor: '#e8f0fe',
                                      color: '#667eea',
                                      borderRadius: '4px',
                                      fontSize: '12px',
                                      fontWeight: '500'
                                    }}>
                                      {service}
                                    </span>
                                  ))}
                                </div>
                              ) : '-'}
                            </td>
                            <td style={{ padding: '16px', color: '#666', maxWidth: '300px' }}>{devi.message}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'newsletter' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '24px', fontWeight: '700' }}>
                    <i className="fas fa-newspaper" style={{ marginRight: '12px', color: '#667eea' }}></i>
                    Inscriptions à la newsletter
                  </h2>
                </div>
                {newsletter.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '60px', color: '#999' }}>
                    <i className="fas fa-inbox" style={{ fontSize: '48px', marginBottom: '16px', opacity: 0.5 }}></i>
                    <p style={{ fontSize: '16px', margin: 0 }}>Aucune inscription pour le moment</p>
                  </div>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          color: 'white'
                        }}>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Date</th>
                          <th style={{ padding: '16px', textAlign: 'left', fontWeight: '600', fontSize: '14px' }}>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newsletter.map((item, index) => (
                          <tr 
                            key={item.id} 
                            style={{ 
                              borderBottom: '1px solid #eee',
                              backgroundColor: index % 2 === 0 ? '#fff' : '#f8f9fa',
                              transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#f0f4ff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f8f9fa';
                            }}
                          >
                            <td style={{ padding: '16px', color: '#666', fontSize: '14px' }}>
                              <i className="fas fa-calendar-alt" style={{ marginRight: '8px', color: '#667eea' }}></i>
                              {formatDate(item.created_at)}
                            </td>
                            <td style={{ padding: '16px', color: '#333' }}>
                              <a href={`mailto:${item.email}`} style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>
                                {item.email}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
