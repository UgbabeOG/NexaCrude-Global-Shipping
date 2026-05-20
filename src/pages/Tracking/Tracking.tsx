import React, { useState, useEffect } from 'react';
import { Search, Package, MapPin, Truck, CheckCircle, Clock, Play, RotateCcw } from 'lucide-react';
import styles from './Tracking.module.css';

const Tracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [showStatus, setShowStatus] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId) {
      setShowStatus(true);
      setProgress(0);
    }
  };

  useEffect(() => {
    let interval: number;
    if (isSimulating && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.5, 100));
      }, 50); // Simulates 5 days in ~10 seconds
    } else if (progress >= 100) {
      setIsSimulating(false);
    }
    return () => clearInterval(interval);
  }, [isSimulating, progress]);

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
  const currentDay = Math.floor((progress / 100) * 5) + 1;

  return (
    <div className={styles.trackingPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Track Your Shipment</h1>
            <p>Enter your tracking number to watch your cargo's 5-day voyage in real-time.</p>
            
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <div className={styles.inputGroup}>
                <Search className={styles.searchIcon} />
                <input 
                  type="text" 
                  placeholder="Enter Tracking ID (e.g., KOREA-SH-001)" 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
              </div>
              <button type="submit" className="btn">Track Now</button>
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
                  <h3>Live Voyage Simulation: {trackingId}</h3>
                  <p>Current Day: {currentDay > 5 ? 5 : currentDay} / 5</p>
                </div>
                <div className={styles.mapControls}>
                  <button 
                    className={styles.controlBtn} 
                    onClick={() => setIsSimulating(!isSimulating)}
                    disabled={progress >= 100}
                  >
                    <Play size={18} fill={isSimulating ? 'currentColor' : 'none'} />
                    {isSimulating ? 'Pause' : 'Start Voyage'}
                  </button>
                  <button 
                    className={styles.controlBtn} 
                    onClick={() => {setProgress(0); setIsSimulating(false);}}
                  >
                    <RotateCcw size={18} />
                    Reset
                  </button>
                </div>
              </div>

              <div className={styles.mapWrapper}>
                <svg viewBox="0 0 800 400" className={styles.svgMap}>
                  {/* Water Background */}
                  <rect width="800" height="400" fill="#f0f9ff" />
                  
                  {/* Landmass Mockup */}
                  <path d="M550,0 L800,0 L800,400 L500,400 Q520,300 580,250 T620,100 Z" fill="#e2e8f0" />
                  <path d="M0,0 L450,0 Q400,100 350,150 T300,300 L0,400 Z" fill="#e2e8f0" />

                  {/* Route Paths */}
                  <line x1={busan.x} y1={busan.y} x2={qingdao.x} y2={qingdao.y} stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1={qingdao.x} y1={qingdao.y} x2={shanghai.x} y2={shanghai.y} stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Ports */}
                  <circle cx={busan.x} cy={busan.y} r="6" fill="#003366" />
                  <text x={busan.x + 10} y={busan.y} className={styles.portLabel}>Busan</text>
                  
                  <circle cx={qingdao.x} cy={qingdao.y} r="6" fill="#003366" />
                  <text x={qingdao.x - 60} y={qingdao.y + 5} className={styles.portLabel}>Qingdao</text>

                  <circle cx={shanghai.x} cy={shanghai.y} r="6" fill="#10b981" />
                  <text x={shanghai.x + 10} y={shanghai.y + 5} className={styles.portLabel}>Shanghai</text>

                  {/* Animated Ship */}
                  <g transform={`translate(${shipPos.x - 15}, ${shipPos.y - 10})`}>
                    <rect width="30" height="12" rx="2" fill="#003366" />
                    <path d="M5,0 L10,-5 L20,-5 L25,0" fill="#003366" />
                    <circle cx="15" cy="6" r="2" fill="white" opacity="0.5" />
                  </g>
                </svg>

                <div className={styles.voyageInfo}>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><MapPin size={20} /></div>
                    <div>
                      <p className={styles.infoLabel}>Current Leg</p>
                      <p className={styles.infoValue}>
                        {progress === 0 ? 'At Port: Busan' : 
                         progress < 50 ? 'Busan → Qingdao' : 
                         progress === 50 ? 'At Port: Qingdao' :
                         progress < 100 ? 'Qingdao → Shanghai' : 'Arrived: Shanghai'}
                      </p>
                    </div>
                  </div>
                  <div className={styles.infoCard}>
                    <div className={styles.infoIcon}><Clock size={20} /></div>
                    <div>
                      <p className={styles.infoLabel}>Estimated ETA</p>
                      <p className={styles.infoValue}>{progress < 100 ? 'May 25, 2026' : 'Delivered'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.statusTimeline}>
              <div className={`${styles.step} ${progress >= 0 ? styles.completed : ''}`}>
                <div className={styles.stepIcon}><CheckCircle size={20} /></div>
                <p>Departure: Busan</p>
              </div>
              <div className={`${styles.step} ${progress >= 50 ? styles.completed : ''}`}>
                <div className={styles.stepIcon}><Package size={20} /></div>
                <p>Stop: Qingdao</p>
              </div>
              <div className={`${styles.step} ${progress >= 100 ? styles.completed : ''}`}>
                <div className={styles.stepIcon}><Truck size={20} /></div>
                <p>Arrival: Shanghai</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Tracking;
