import React, { PureComponent } from 'react';
import { Icon } from 'antd';
import Link from 'umi/link';
import Debounce from 'lodash-decorators/debounce';
import styles from './index.less';
import RightContent from './RightContent';
import YIcon from './icon';

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  render() {
    const { collapsed, isMobile, logo } = this.props;
    return (
      <div className={styles.header}>
        <div className={styles.logo} id="logo">
          <Link to="/">
            <YIcon className={styles.icon} />
            {
              collapsed ? '' : <h1>柚宝母婴照护</h1>
            }
          </Link>
        </div>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <RightContent {...this.props} />
      </div>
    );
  }
}
