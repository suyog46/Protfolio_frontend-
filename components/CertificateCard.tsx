import React, { useState } from 'react';
import { TrophyIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import ReactDOM from 'react-dom';
import { CarouselDemo } from "@/components/Pjcarausel";

function Modal({ isOpen, onClose, children }: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4 ">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl   w-full lg:w-2/3  max-h-[90vh] p-6  overflow-y-scroll relative ">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default function CertificateCard({
  imageUrl,
  altText,
  title,
  issuer,
  description,
  issueDate,
  credentialId,
  modalContent,
  imagePrefix,
  imageCount,
}: {
  imageUrl: string;
  altText?: string;
  title: string;
  issuer?: string;
  description: string;
  issueDate: string;
  imagePrefix:string;
  imageCount:number;
  credentialId?: string;
  modalContent?: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-900/50 hover:bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden transition-all hover:scale-[1.02] group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={altText || 'Certificate'}
          className="w-full h-full object-cover filter group-hover:brightness-110 transition-all"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
            <TrophyIcon className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {issuer && <p className="text-xs text-slate-400">{issuer}</p>}
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-4">{description}</p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-slate-500">Date: {issueDate}</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded"
            aria-label={`View ${title} details`}
          >
            View <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
        {modalContent || (
          <>
    
            <div className="w-full flex items-center justify-center ">
                <div className="lg:w-1/2 w-5/6">
              <CarouselDemo imageCount={imageCount} imagePrefix={imagePrefix} />
                </div>
            
            </div>
            <div className="text-start mt-8">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h4>
              {issuer && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Issued by: {issuer}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">{description}</p>
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {issueDate && (
                  <div>
                    <span className="text-sm text-gray-500">Issued:</span>
                    <p className="font-medium">{issueDate}</p>
                  </div>
                )}
                {/* {credentialId && (
                  <div>
                    <span className="text-sm text-gray-500">Credential ID:</span>
                    <p className="font-mono text-sm">{credentialId}</p>
                  </div>
                )} */}
              </div>
            </div>
            {/* <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Verify
              </button>
            </div> */}
          </>
        )}
      </Modal>
    </div>
  );
}
