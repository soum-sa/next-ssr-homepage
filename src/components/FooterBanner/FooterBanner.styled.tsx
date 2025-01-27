'use client';

import css from '@styled-system/css';
import styled from 'styled-components';

import { Stack } from '@ui/lego/layouts';
import { BaseText } from '@ui/lego/typography';

export const Root = styled('section')(() =>
  css({
    overflow: 'hidden',
    position: 'relative',
    height: [200, 200, 500, 500],
  })
);

export const ContentContainer = styled('div')(() =>
  css({
    maxWidth: 'pageWidth',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    paddingInline: [2, 2, 2, 0],
    position: 'relative',
    zIndex: 1,
  })
);

export const ContentWrapper = styled('div')(() =>
  css({
    maxWidth: ['70%', '80%', '80%', '80%'],
  })
);

export const DownloadBox = styled(Stack)(() =>
  css({
    pt: [2, 3, 5, 5],
  })
);

export function Caption(props: React.PropsWithChildren) {
  return (
    <BaseText
      as="p"
      color="accent.blue"
      fontWeight="mobile.heading.1"
      fontSize={{ _: 'mobile.caption.1', tablet: 'desktop.caption.2' }}
    >
      {props.children}
    </BaseText>
  );
}

export const TopRingPosition = styled('div')(({ isRTL }: { isRTL: boolean }) =>
  css({
    width: [115, 115, 300, 300],
    height: [190, 190, 450, 450],
    position: 'absolute',
    insetBlockStart: 0,
    insetInlineEnd: 0,
    transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
  })
);

export const BottomRingPosition = styled('div')(({ isRTL }: { isRTL: boolean }) =>
  css({
    width: [115, 115, 300, 300],
    height: [190, 190, 450, 450],
    position: 'absolute',
    insetBlockEnd: 0,
    insetInlineStart: 0,
    transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
  })
);
