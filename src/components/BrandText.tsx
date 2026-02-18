"use client";

import React from 'react';

interface BrandTextProps {
    className?: string;
}

const BrandText: React.FC<BrandTextProps> = ({ className = "" }) => {
    return (
        <span className={`brand-text-gradient ${className}`}>
            yikei<span>.ai</span>
            <style jsx>{`
        .brand-text-gradient {
          display: inline-flex;
          align-items: center;
          font-weight: 800;
          background: linear-gradient(135deg, var(--navy) 0%, var(--gold) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
          line-height: inherit;
        }

        .brand-text-gradient span {
          /* Ensure the .ai part also follows the gradient or has its own logic if needed */
          /* For now, the whole thing is a single gradient as requested */
        }
      `}</style>
        </span>
    );
};

export default BrandText;
