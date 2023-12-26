import styled from 'styled-components'
import { ViewType } from './View.types'

export const StyledView = styled.div.attrs<Partial<ViewType>>(({ as }) => ({ as: as || 'div' }))`
  display: flex;
  flex-direction: column; // Only to simulate the React Native workflow

  ${({ $p }) => $p && `padding: ${typeof $p === 'number' ? `${$p}px` : $p};`};
  ${({ $ph }) => $ph && `padding: 0 ${typeof $ph === 'number' ? `${$ph}px` : $ph};`};
  ${({ $pv }) => $pv && `padding: ${typeof $pv === 'number' ? `${$pv}px` : $pv} 0;`};
  ${({ $pl }) => $pl && `padding-left: ${typeof $pl === 'number' ? `${$pl}px` : $pl};`};
  ${({ $pr }) => $pr && `padding-right: ${typeof $pr === 'number' ? `${$pr}px` : $pr};`};
  ${({ $pt }) => $pt && `padding-top: ${typeof $pt === 'number' ? `${$pt}px` : $pt};`};
  ${({ $pb }) => $pb && `padding-bottom: ${typeof $pb === 'number' ? `${$pb}px` : $pb};`};

  ${({ $m }) => $m && `margin: ${typeof $m === 'number' ? `${$m}px` : $m};`};
  ${({ $mh }) => $mh && `margin: 0 ${typeof $mh === 'number' ? `${$mh}px` : $mh};`};
  ${({ $mv }) => $mv && `margin: ${typeof $mv === 'number' ? `${$mv}px` : $mv} 0;`};
  ${({ $ml }) => $ml && `margin-left: ${typeof $ml === 'number' ? `${$ml}px` : $ml};`};
  ${({ $mr }) => $mr && `margin-right: ${typeof $mr === 'number' ? `${$mr}px` : $mr};`};
  ${({ $mt }) => $mt && `margin-top: ${typeof $mt === 'number' ? `${$mt}px` : $mt};`};
  ${({ $mb }) => $mb && `margin-bottom: ${typeof $mb === 'number' ? `${$mb}px` : $mb};`};

  ${({ $h }) => $h && `height: ${typeof $h === 'number' ? `${$h}px` : $h};`};
  ${({ $w }) => $w && `width: ${typeof $w === 'number' ? `${$w}px` : $w};`};

  ${({ $br }) => $br && `border-radius: ${typeof $br === 'number' ? `${$br}px` : $br};`};
  ${({ $btlr }) => $btlr && `border-top-left-radius: ${typeof $btlr === 'number' ? `${$btlr}px` : $btlr};`};
  ${({ $btrr }) => $btrr && `border-top-right-radius: ${typeof $btrr === 'number' ? `${$btrr}px` : $btrr};`};
  ${({ $bblr }) => $bblr && `border-bottom-left-radius: ${typeof $bblr === 'number' ? `${$bblr}px` : $bblr};`};
  ${({ $bbrr }) => $bbrr && `border-bottom-right-radius: ${typeof $bbrr === 'number' ? `${$bbrr}px` : $bbrr};`};

  ${({ $bw }) => $bw && `border-width: ${typeof $bw === 'number' ? `${$bw}px` : $bw};`};

  ${({ $round }) => $round && `height: ${$round}px; width: ${$round}px; border-radius: ${$round / 2}px;`};

  ${({ $flex }) => $flex && `flex: ${$flex};`};
  ${({ $flex1 }) => $flex1 && `flex: 1;`};

  ${({ $row }) => $row && `flex-direction: row;`};

  ${({ $main }) => $main && `justify-content: ${$main};`};
  ${({ $cross }) => $cross && `align-items: ${$cross};`};

  ${({ $overflow }) => $overflow && `overflow: ${$overflow};`};
  ${({ $overflowHidden }) => $overflowHidden && `overflow: hidden;`};

  ${({ $position }) => $position && `position: ${$position};`};
  ${({ $absolute }) => $absolute && `position: absolute;`};
  ${({ $absolute, $x }) => $absolute && $x && `left: ${typeof $x === 'number' ? `${$x}px` : $x};`};
  ${({ $absolute, $rx }) => $absolute && $rx && `right: ${typeof $rx === 'number' ? `${$rx}px` : $rx};`};
  ${({ $absolute, $y }) => $absolute && $y && `top: ${typeof $y === 'number' ? `${$y}px` : $y};`};
  ${({ $absolute, $by }) => $absolute && $by && `bottom: ${typeof $by === 'number' ? `${$by}px` : $by};`};

  ${props => props.style};
`
