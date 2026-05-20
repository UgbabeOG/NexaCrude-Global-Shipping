import React, { useState, useEffect } from 'react';
import { Search, Package, MapPin, Truck, CheckCircle, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from './Tracking.module.css';

const Tracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [startTime, setStartTime] = useState<number | null>(null);
  const { t } = useTranslation();

  const totalSimulatedDuration = 5 * 24 * 60 * 60 * 1000; // 5 days real time
  const tickInterval = 1000;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId) {
      setShowStatus(true);
      setProgress(0);
      setStartTime(Date.now());
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (showStatus && startTime !== null) {
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const nextProgress = Math.min((elapsed / totalSimulatedDuration) * 100, 100);
        setProgress(nextProgress);
      }, tickInterval);
    }
    return () => clearInterval(interval);
  }, [showStatus, startTime]);

  // Coordinates for the ports in the SVG (viewBox="0 0 800 400")
  const busan = { x: 600, y: 150 };
  const qingdao = { x: 400, y: 180 };
  const shanghai = { x: 420, y: 300 };

  // Calculate current ship position based on progress
  const getShipPos = () => {
    if (progress <= 50) {
      // Leg 1: Busan -> Qingdao (Days 1-2.5 approx)
      const factor = progress / 50;
      return {
        x: busan.x + (qingdao.x - busan.x) * factor,
        y: busan.y + (qingdao.y - busan.y) * factor
      };
    } else {
      // Leg 2: Qingdao -> Shanghai (Days 2.5-5 approx)
      const factor = (progress - 50) / 50;
      return {
        x: qingdao.x + (shanghai.x - qingdao.x) * factor,
        y: qingdao.y + (shanghai.y - qingdao.y) * factor
      };
    }
  };

  const shipPos = getShipPos();
  const currentDay = Math.min(Math.max(1, Math.ceil((progress / 100) * 5)), 5);
  const progressPercent = Math.round(progress);
  const departureDate = new Date(startTime ?? Date.now());
  const etaDate = new Date(departureDate.getTime() + 5 * 24 * 60 * 60 * 1000);
  const formattedEta = etaDate.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className={styles.trackingPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>{t('tracking.title')}</h1>
            <p>{t('tracking.desc')}</p>
            
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <div className={styles.inputGroup}>
                <Search className={styles.searchIcon} />
                <input 
                  type="text" 
                  placeholder={t('tracking.placeholder')} 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <button type="submit" className="btn">{t('tracking.btn')}</button>
            </form>
          </div>
        </div>
      </section>

      {showStatus && (
        <section className={styles.statusSection}>
          <div className="container">
            <div className={styles.mapContainer}>
              <div className={styles.mapHeader}>
                <div>
                  <h3>{t('tracking.live_simulation')}: {trackingId}</h3>
                  <p>{t('tracking.current_day', { day: currentDay > 5 ? 5 : currentDay })}</p>
                </div>
                <div className={styles.mapStatus}>
                  <span>{`Progress: ${progressPercent}%`}</span>
                </div>
              </div>
              <div className={styles.mapWrapper}>
                <svg viewBox="0 0 800 400" className={styles.svgMap}>
                  <defs>
                    <linearGradient id="seaGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#d7f5ff" />
                      <stop offset="100%" stopColor="#9dd9ff" />
                    </linearGradient>
                    <linearGradient id="landGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f7f2e7" />
                      <stop offset="100%" stopColor="#d9d1b8" />
                    </linearGradient>
                    <filter id="shipShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.12" />
                    </filter>
                    <marker id="arrowTip" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L10,5 L0,10 Z" fill="#ffffff" />
                    </marker>
                  </defs>

                  <rect width="800" height="400" fill="url(#seaGradient)" />

                  <g opacity="0.85">
                    <path d="M550,0 L800,0 L800,400 L500,400 Q520,300 580,250 T620,100 Z" fill="url(#landGradient)" />
                    <path d="M0,0 L450,0 Q400,100 350,150 T300,300 L0,400 Z" fill="url(#landGradient)" />
                  </g>

                  <g className={styles.waveLines}>
                    <path d="M40,70 C110,60 170,100 240,90" />
                    <path d="M120,140 C190,130 250,170 320,160" />
                    <path d="M200,220 C270,210 330,250 400,240" />
                    <path d="M330,90 C400,80 460,120 530,110" />
                  </g>

                  <path
                    d={`M${busan.x},${busan.y} L${qingdao.x},${qingdao.y} L${shanghai.x},${shanghai.y}`}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeDasharray="10,10"
                    strokeLinecap="round"
                    markerEnd="url(#arrowTip)"
                    opacity="0.85"
                  />

                  <circle className={styles.portHalo} cx={busan.x} cy={busan.y} r="14" />
                  <circle className={styles.portDot} cx={busan.x} cy={busan.y} r="6" />
                  <text x={busan.x + 10} y={busan.y - 10} className={styles.portLabel}>{t('tracking.busan')}</text>

                  <circle className={styles.portHalo} cx={qingdao.x} cy={qingdao.y} r="14" />
                  <circle className={styles.portDot} cx={qingdao.x} cy={qingdao.y} r="6" />
                  <text x={qingdao.x - 60} y={qingdao.y - 10} className={styles.portLabel}>{t('tracking.qingdao')}</text>

                  <circle className={styles.portHaloActive} cx={shanghai.x} cy={shanghai.y} r="16" />
                  <circle className={styles.portDotActive} cx={shanghai.x} cy={shanghai.y} r="7" />
                  <text x={shanghai.x + 10} y={shanghai.y - 10} className={styles.portLabel}>{t('tracking.shanghai')}</text>

                  <g transform={`translate(${shipPos.x - 18}, ${shipPos.y - 12})`} filter="url(#shipShadow)">
                    <rect width="36" height="14" rx="4" fill="#0f172a" />
                    <path d="M8,0 L12,-6 L24,-6 L28,0" fill="#0f172a" />
                    <circle cx="18" cy="8" r="3" fill="#38bdf8" />
                  </g>
                </svg>

                <div className={styles.voyageInfo}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><MapPin size={20} /></div>
                    <div>
                      <p className={styles.infoLabel}>{t('tracking.current_leg')}</p>
                      <p className={styles.infoValue}>
                        {progress === 0 ? t('tracking.at_port_busan') : 
                         progress < 50 ? t('tracking.busan_qingdao') : 
                         progress === 50 ? t('tracking.at_port_qingdao') :
                         progress < 100 ? t('tracking.qingdao_shanghai') : t('tracking.arrived_shanghai')}
                      </p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><Clock size={20} /></div>
                    <div>
                      <p className={styles.infoLabel}>{t('tracking.estimated_eta')}</p>
                      <p className={styles.infoValue}>{progress < 100 ? formattedEta : t('tracking.delivered')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.statusTimeline}>
              <div className={`${styles.step} ${progress >= 0 ? styles.completed : ''}`}>
                <div className={styles.stepIcon}><CheckCircle size={20} /></div>
                <p>{t('tracking.departure_busan')}</p>
              </div>
              <div className={`${styles.step} ${progress >= 50 ? styles.completed : ''}`}>
                <div className={styles.stepIcon}><Package size={20} /></div>
                <p>{t('tracking.stop_qingdao')}</p>
              </div>
              <div className={`${styles.step} ${progress >= 100 ? styles.completed : ''}`}>
                <div className={styles.stepIcon}><Truck size={20} /></div>
                <p>{t('tracking.arrival_shanghai')}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Tracking;
