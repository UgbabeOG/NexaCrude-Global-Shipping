import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h2 className={styles.logoText}>NEXACRUDE</h2>
            <p>{t('footer.about_desc')}</p>
            <div className={styles.socials}>
              <Mail size={20} />
              <Phone size={20} />
              <MapPin size={20} />
              <Globe size={20} />
            </div>
          </div>
          
          <div className={styles.linksSection}>
            <h3>{t('footer.about')}</h3>
            <ul>
              <li><a href="#">{t('footer.company_profile')}</a></li>
              <li><a href="#">{t('footer.leadership')}</a></li>
              <li><a href="#">{t('footer.sustainability')}</a></li>
              <li><a href="#">{t('footer.awards')}</a></li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h3>{t('footer.services')}</h3>
            <ul>
              <li><a href="#">{t('home.oil_name')}</a></li>
              <li><a href="#">{t('home.logistics_name')}</a></li>
              <li><a href="#">{t('home.chemicals_name')}</a></li>
              <li><a href="#">{t('footer.ship_management')}</a></li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h3>{t('footer.support')}</h3>
            <ul>
              <li><a href="#">{t('footer.contact_us')}</a></li>
              <li><a href="#">{t('footer.global_network')}</a></li>
              <li><a href="#">{t('footer.privacy_policy')}</a></li>
              <li><a href="#">{t('footer.terms_conditions')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
