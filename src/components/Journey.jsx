import React from 'react';
import { useTranslation } from 'react-i18next';

const Journey = () => {
  const { t } = useTranslation();
  return (
    <section id="journey-section" className="journey-section">
      <div className="container">
        <div className="journey-header">
          <p className="section-subtitle">{t('journey.subtitle')}</p>
          <h2 className="journey-title-static">{t('journey.title')}</h2>
        </div>

        <div className="journey-vertical-container">
          {/* Vertical Track Line */}
          <div className="journey-v-line"></div>

          {/* Node 1 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">{t('journey.node1.org')}</div>
              <div className="journey-year">{t('journey.node1.year')}</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">{t('journey.node1.title')}</h3>
              <p className="journey-node-desc">{t('journey.node1.desc')}</p>
            </div>
          </div>

          {/* Node 2 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">{t('journey.node2.org')}</div>
              <div className="journey-year">{t('journey.node2.year')}</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">{t('journey.node2.title')}</h3>
              <p className="journey-node-desc">{t('journey.node2.desc')}</p>
            </div>
          </div>

          {/* Node 3 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">{t('journey.node3.org')}</div>
              <div className="journey-year">{t('journey.node3.year')}</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">{t('journey.node3.title')}</h3>
              <p className="journey-node-desc">{t('journey.node3.desc')}</p>
            </div>
          </div>

          {/* Node 4 */}
          <div className="journey-v-node">
            <div className="journey-v-left">
              <div className="journey-org">{t('journey.node4.org')}</div>
              <div className="journey-year">{t('journey.node4.year')}</div>
            </div>
            <div className="node-pin-v"></div>
            <div className="journey-v-right">
              <h3 className="journey-node-title">{t('journey.node4.title')}</h3>
              <p className="journey-node-desc">{t('journey.node4.desc')}</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Journey;
