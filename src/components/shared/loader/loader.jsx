import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Loader = () => (
  <StyledLoader>
    <div className="lds-grid">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </StyledLoader>
);

const ldsGrid = keyframes`
  0%, 100% {
      opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const StyledLoader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .lds-grid {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #2d79ff;
      animation: ${ldsGrid} 1.2s linear infinite;

      &:nth-child(1) {
        top: 8px;
        left: 8px;
        animation-delay: 0s;
      }

      &:nth-child(2) {
        top: 8px;
        left: 32px;
        animation-delay: -0.4s;
      }

      &:nth-child(3) {
        top: 8px;
        left: 56px;
        animation-delay: -0.8s;
      }

      &:nth-child(4) {
        top: 32px;
        left: 8px;
        animation-delay: -0.4s;
      }

      &:nth-child(5) {
        top: 32px;
        left: 32px;
        animation-delay: -0.8s;
      }

      &:nth-child(6) {
        top: 32px;
        left: 56px;
        animation-delay: -1.2s;
      }

      &:nth-child(7) {
        top: 56px;
        left: 8px;
        animation-delay: -0.8s;
      }

      &:nth-child(8) {
        top: 56px;
        left: 32px;
        animation-delay: -1.2s;
      }

      &:nth-child(9) {
        top: 56px;
        left: 56px;
        animation-delay: -1.6s;
      }
    }
  }
`;
