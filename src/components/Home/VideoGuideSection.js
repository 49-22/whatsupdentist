import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import guideImage from '../../images/s1.png';

const steps = [
  {
    number: '01',
    title: 'Record a short video',
    text: 'Use your phone in good light. Open your mouth slowly and show the tooth or area that is bothering you.',
    label: 'Camera on',
  },
  {
    number: '02',
    title: 'Show us the concern',
    text: 'Keep the camera steady and include a close-up from the front, left, and right if you can.',
    label: 'Clear view',
  },
  {
    number: '03',
    title: 'Send it on WhatsApp',
    text: 'Share the video with your name and symptoms. The dentist reviews it before your consultation.',
    label: 'Ready to send',
  },
];

function VideoGuideSection() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <section id="video-guide" className="video-guide-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="guide-copy">
              <p className="eyebrow">Your 60-second guide</p>
              <h2>Yes, a dentist can help you virtually.</h2>
              <p className="section-lead">
                A clear video gives the dentist a useful first look before you speak. Here is exactly what to record and send.
              </p>
              <div className="guide-proof">
                <span className="guide-proof-icon" aria-hidden="true">✓</span>
                <span>No special equipment. Your phone is enough.</span>
              </div>
              <Link to="/booking" className="custom-btn">Book a video consultation</Link>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="video-guide-player" aria-label="Interactive guide for sending a dental video">
              <div className="player-topbar">
                <span className="player-live"><span /> Guided walkthrough</span>
                <span>0{activeStep + 1} / 03</span>
              </div>
              <div className="player-screen">
                <img src={guideImage} alt="A phone ready to share a dental consultation video" />
                <div className="screen-caption">
                  <span className="screen-caption-label">{step.label}</span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
                <div className="play-mark" aria-hidden="true">{activeStep === 2 ? '✓' : '▶'}</div>
              </div>
              <div className="player-controls">
                <div className="progress-track" aria-hidden="true">
                  <span style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }} />
                </div>
                <div className="player-actions">
                  <button type="button" className="player-button" onClick={() => setActiveStep((activeStep + steps.length - 1) % steps.length)} aria-label="Previous guide step">←</button>
                  <button type="button" className="player-button player-button-primary" onClick={() => setActiveStep((activeStep + 1) % steps.length)} aria-label="Next guide step">{activeStep === 2 ? '↻' : '▶'}</button>
                  <button type="button" className="player-button" onClick={() => setActiveStep((activeStep + 1) % steps.length)} aria-label="Next guide step">→</button>
                </div>
              </div>
            </div>
            <div className="guide-steps" role="tablist" aria-label="Dental video guide steps">
              {steps.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeStep === index}
                  className={`guide-step ${activeStep === index ? 'is-active' : ''}`}
                  onClick={() => setActiveStep(index)}
                  key={item.number}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoGuideSection;