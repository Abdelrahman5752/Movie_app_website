import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-4">
            <Shield size={48} className="text-primary mb-3" />
            <h1 className="display-5">Privacy Policy</h1>
          </div>
          
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h3 className="mb-3">Information We Collect</h3>
              <p>
                Movie App collects only the movie information you choose to add to your collection, 
                including movie titles, release dates, genres, prices, and descriptions.
              </p>

              <h3 className="mb-3">How We Use Your Information</h3>
              <p>
                The information you provide is used solely to manage your personal movie collection. 
                We do not share, sell, or distribute your data to third parties.
              </p>

              <h3 className="mb-3">Data Storage</h3>
              <p>
                Your movie collection data is stored securely and is only accessible by you. 
                You have full control over your data and can edit or delete any information at any time.
              </p>

              <h3 className="mb-3">Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us through our 
                support channels.
              </p>

              <div className="text-muted mt-4">
                <small>Last updated: {new Date().toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;