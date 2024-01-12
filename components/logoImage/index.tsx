import styles from './style.module.css'
import type { ComponentProps, ReactElement } from 'react'

const Logo = (props: ComponentProps<'svg'>): ReactElement => (
  <svg viewBox="0 0 83 83" {...props}>
    <g transform="translate(-1544 -687)">
      <path d="M1620 736.076 1609.84 692 1563.59 692 1549 724.079 1557.74 766 1604.61 766ZM1554.86 724.787 1564.4 703.816 1568.03 720.793 1571.13 735.25 1561.1 754.742ZM1601.28 760.158 1564.66 760.158 1575.75 738.596 1612.37 738.596ZM1605.44 697.842 1613.49 732.753 1576.31 732.753 1573.06 717.58 1568.84 697.842Z"
        fill="currentColor"
      />
      <path
        d="M1556 726 1556 724 1560 724 1560 726Z"
        fill="currentColor"
      />
      <path
        d="M1576 726 1576 724 1580 724 1580 726Z"
        fill="currentColor"
      />
      <path
        d="M1583 726 1583 724 1587 724 1587 726Z"
        fill="currentColor"
      />
      <path
        d="M1563 726 1563 724 1567 724 1567 726Z"
        fill="currentColor"
      />
      <path
        d="M1589 726 1589 724 1593 724 1593 726Z"
        fill="currentColor"
      />
      <path
        d="M1601.78 711.35 1600.06 710.573 1601.66 707.032 1603.38 707.809Z"
        fill="currentColor"
      />
      <path
        d="M1595.2 730.112 1594.37 726.315 1596.21 725.914 1597.04 729.711Z"
        fill="currentColor"
      />
      <path
        d="M1600.82 756.691 1599.99 752.894 1601.83 752.493 1602.66 756.29Z"
        fill="currentColor"
      />
      <path
        d="M1599.06 717.547 1597.35 716.771 1598.95 713.23 1600.66 714.007Z"
        fill="currentColor"
      />
      <path
        d="M1604.49 705.153 1602.78 704.377 1604.38 700.836 1606.1 701.612Z"
        fill="currentColor"
      />
      <path
        d="M1596.34 723.742 1594.63 722.966 1596.23 719.425 1597.95 720.201Z"
        fill="currentColor"
      />
      <path
        d="M1599.42 750.047 1598.59 746.25 1600.43 745.849 1601.26 749.646Z"
        fill="currentColor"
      />
      <path
        d="M1598.01 743.401 1597.18 739.604 1599.02 739.203 1599.85 743Z"
        fill="currentColor"
      />
    </g>
  </svg>
)

export default function LogoImage() {
  return (
    <div className={styles.pagelogo}>
      <Logo />
    </div>
  )
}