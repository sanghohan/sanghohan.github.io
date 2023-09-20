import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';

export function EmptyRowCol<T = {}>({ children }: PropsWithChildren<T>) {
  return (
    <Row>
      <Col>{children}</Col>
    </Row>
  );
}

// eslint-disable-next-line react/require-default-props
export function HrefTargetBlank({ url, text }: PropsWithChildren<{ url: string; text?: string }>) {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {text || url}
    </a>
  );
}
