import { h } from 'preact'
import theme from '../../Theme/style.css'
import style from './style.css'
import PageTitle from '../../PageTitle'
import Button from '../../Button'
import {trackComponent} from '../../../Tracker'
import {localised} from '../../../locales'
import Graphic from './graphic';

const Guidance = ({translate, parseTranslatedTags, documentType, nextStep}) => {
  return (
    <div className={theme.fullHeightContainer}>
      <PageTitle
        title={translate(`capture.${documentType}.front.title`)}
        subTitle={
          <span className={style.subTitle}>
            {parseTranslatedTags(`capture.${documentType}.front.sub_title`, ({ text }) => (
              <span className={style.bolder}>{text}</span>
            ))}
          </span>
        }
      />
      <div className={style.content}>
        <div className={style.makeSure}>{translate('proof_of_address.guidance.make_sure_it_shows')}</div>
        <div className={style.docImageContainer}>
          <Graphic />
        </div>
      </div>
      <div className={theme.thickWrapper}>
        <Button
          variants={["primary", "centered"]}
          onClick={nextStep}
        >
          {translate('proof_of_address.guidance.continue')}
        </Button>
      </div>
    </div>
  )
}

export default trackComponent(localised(Guidance))
