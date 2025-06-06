"use client";

import styled from "styled-components";

const ErrorWrapper = styled.div`
  background-color: #ffeaea;
  color: #8b0000;
  padding: 12px 16px;
  border-left: 4px solid #ff4d4d;
  border-radius: 6px;
  font-weight: 500;
  max-width: 500px;
`;

export default function ErrorBanner({ message }: { message: string }) {
    return <ErrorWrapper>⚠️ {message}</ErrorWrapper>;
}
