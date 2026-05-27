import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Tracking from './pages/Tracking/Tracking';
import Logistics from './pages/Logistics/Logistics';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracking" element={<Tracking />} />
          {/* Placeholder routes for other links */}
          <Route
            path="/about"
            element={
              <div className="container" style={{ padding: '100px 0' }}>
                <div style={{ maxWidth: 900, margin: '0 auto' }}>
                  <h1>{t('about.title')}</h1>
                  <p style={{ margin: '20px 0 40px', lineHeight: 1.8 }}>{t('about.intro')}</p>
                  <div style={{ display: 'grid', gap: 24 }}>
                    <div style={{ background: '#f8fafc', borderRadius: 20, padding: 28, boxShadow: '0 20px 50px rgba(15, 23, 42, 0.06)' }}>
                      <h2>{t('about.mission_title')}</h2>
                      <p>{t('about.mission_text')}</p>
                    </div>
                    <div style={{ background: '#ffffff', borderRadius: 20, padding: 28, boxShadow: '0 20px 50px rgba(15, 23, 42, 0.06)' }}>
                      <h2>{t('about.vision_title')}</h2>
                      <p>{t('about.vision_text')}</p>
                    </div>
                    <div style={{ background: '#f8fafc', borderRadius: 20, padding: 28, boxShadow: '0 20px 50px rgba(15, 23, 42, 0.06)' }}>
                      <h2>{t('about.values_title')}</h2>
                      <p>{t('about.values_text')}</p>
                    </div>
                    <div style={{ background: '#ffffff', borderRadius: 20, padding: 28, boxShadow: '0 20px 50px rgba(15, 23, 42, 0.06)' }}>
                      <h2>{t('about.sustainability_title')}</h2>
                      <p>{t('about.sustainability_text')}</p>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/units"
            element={
              <div className="container" style={{ padding: '100px 0' }}>
                <div style={{ maxWidth: 980, margin: '0 auto' }}>
                  <h1>{t('units.title')}</h1>
                  <p style={{ margin: '20px 0 40px', lineHeight: 1.8 }}>{t('units.intro')}</p>
                  <div style={{ display: 'grid', gap: 24 }}>
                    {[
                      {
                        title: t('home.oil_name'),
                        desc: t('units.oil_desc')
                      },
                      {
                        title: t('home.logistics_name'),
                        desc: t('units.logistics_desc')
                      },
                      {
                        title: t('home.chemicals_name'),
                        desc: t('units.chemicals_desc')
                      },
                      {
                        title: t('home.drybulk_name'),
                        desc: t('units.drybulk_desc')
                      },
                      {
                        title: t('home.ship_mgmt_name'),
                        desc: t('units.ship_mgmt_desc')
                      },
                      {
                        title: t('home.marine_name'),
                        desc: t('units.marine_desc')
                      }
                    ].map((unit) => (
                      <div key={unit.title} style={{ background: '#ffffff', borderRadius: 20, padding: 28, boxShadow: '0 20px 50px rgba(15, 23, 42, 0.06)' }}>
                        <h3>{unit.title}</h3>
                        <p>{unit.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/investors" element={<div className="container" style={{padding: '100px 0'}}><h1>{t('placeholders.investors_title')}</h1><p>{t('placeholders.investors_desc')}</p></div>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
