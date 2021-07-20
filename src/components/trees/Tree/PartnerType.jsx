import React, { Component } from 'react'
import styles from './styles.scss'
import {
  NODE_PLUS_WIDTH,
  NODE_PLUS_HEIGHT,
  PARTNER_ABDUCTION_TOP_RADIUS,
  PARTNER_ABDUCTION_TOP_Y,
  PARTNER_ABDUCTION_BASE_Y,
  PARTNER_ABDUCTION_BASE_WIDTH,
  PARTNER_ABDUCTION_BASE_HEIGHT
} from './constants'

class PartnerType extends Component {
  render () {
    const type = this.props.type

    if (type === 'PARTNER' || type === 'EX_PARTNER') {
      let transform = 'translate(-5,35)'
      if (type === 'EX_PARTNER') {
        transform += ' rotate(45,5,5)'
      }
      return (
        <g className={styles.plus} transform={transform}>
          <line
            x1={NODE_PLUS_WIDTH / 2}
            y1='0'
            x2={NODE_PLUS_WIDTH / 2}
            y2={NODE_PLUS_HEIGHT}
          />
          <line
            x1='0'
            y1={NODE_PLUS_HEIGHT / 2}
            x2={NODE_PLUS_WIDTH}
            y2={NODE_PLUS_HEIGHT / 2}
          />
        </g>
      )
    }

    if (type === 'ABDUCTION') {
      return (
        <g className={styles.abduction} transform='translate(-5,35)'>
          <circle
            cx={PARTNER_ABDUCTION_BASE_WIDTH / 2}
            cy={PARTNER_ABDUCTION_TOP_Y}
            r={PARTNER_ABDUCTION_TOP_RADIUS}
          />
          <rect
            x='0'
            y={PARTNER_ABDUCTION_BASE_Y}
            ry={PARTNER_ABDUCTION_BASE_HEIGHT / 2}
            width={PARTNER_ABDUCTION_BASE_WIDTH}
            height={PARTNER_ABDUCTION_BASE_HEIGHT}
          />
        </g>
      )
    }

    if (type === 'MARRIED') {
      return (
        <polyline
          transform='translate(-2,35)'
          className={styles.marriage}
          points='0,10 0,3 3,6 6,3 6,10'
        />
      )
    }

    return null
  }
};

export default PartnerType
