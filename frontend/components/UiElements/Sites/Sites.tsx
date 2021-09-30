import React from 'react';
import Wrapper, {
  Content,
  Icon,
  Info,
  Title,
  Action,
  Button,
  Label,
} from './Sites.styled';

type SitesType = {
  icon?: React.ReactNode;
  color?: string;
  description?: string;
  title?: string;
  btntext?: string;
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const Sites = ({
  icon,
  color,
  description,
  title,
  btntext,
  label,
  onClick,
  style,
}: SitesType) => {
  return (
    <Wrapper style={style}>
      <Content>
        {icon && <Icon $color={color}>{icon}</Icon>}
        <Info>
          <Label>{description}</Label>
          <Title>{title}</Title>
        </Info>
      </Content>
      {btntext || label ? (
        <Action>
          <Button $color={color} onClick={onClick}>
            {btntext}
          </Button>
          <Label>{label}</Label>
        </Action>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default Sites;
