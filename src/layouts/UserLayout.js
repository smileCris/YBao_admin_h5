import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import styles from './UserLayout.less';
import YIcon from '@/components/SiderMenu/icon';

const links = [
  {
    key: 'help',
    title: formatMessage({ id: 'layout.user.link.help' }),
    href: '',
  },
  {
    key: 'privacy',
    title: formatMessage({ id: 'layout.user.link.privacy' }),
    href: '',
  },
  {
    key: 'terms',
    title: formatMessage({ id: 'layout.user.link.terms' }),
    href: '',
  },
];

class UserLayout extends React.PureComponent {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = '柚宝母婴照护';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - 柚宝母婴照护`;
  //   }
  //   return title;
  // }

  render() {
    const { children } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <div className={styles.lang}>
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <div className={styles.logo} id="logo">
                <Link to="/">
                  <YIcon className={styles.icon} />
                  <h1>柚宝母婴照护系统</h1>
                </Link>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    );
  }
}

export default UserLayout;
