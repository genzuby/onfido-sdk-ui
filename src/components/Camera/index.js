// @flow
import * as React from 'react'

import { h, Component } from 'preact'
import Webcam from 'react-webcam-onfido'
import classNames from 'classnames'
import withFailureHandling from './withFailureHandling'
import withPermissionsFlow from './withPermissionsFlow'
import style from './style.css'
import { compose } from '../utils/func'

// Specify just a camera height (no width) because on safari if you specify both
// height and width you will hit an OverconstrainedError if the camera does not
// support the precise resolution.
const cameraHeight = 720

const CameraPure = ({
  className, containerClassName,
  renderTitle, renderError, children,
  webcamRef, onUserMedia, onFailure, video,
}) => (
  <div className={classNames(style.camera, className)}>
    {renderTitle}
    <div className={classNames(style.container, containerClassName)}>
      <div className={style.webcamContainer}>
        <Webcam
          className={style.video}
          audio={!!video}
          height={cameraHeight}
          facingMode={"user"}
          {...{onUserMedia, ref: webcamRef, onFailure}}
        />
      </div>
      { children }
      {renderError}
    </div>
  </div>
)

export default compose(
  withFailureHandling,
  withPermissionsFlow
)(CameraPure)

