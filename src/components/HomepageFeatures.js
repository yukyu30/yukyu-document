import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  //   {
  //     title: 配布先,
  //     Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
  //     description: (
  //       <>
  //         Docusaurus was designed from the ground up to be easily installed and
  //         used to get your website up and running quickly.
  //       </>
  //     ),
  //   },
  // {
  //   title: 'yukyu30が制作したものに関する利用規約がまとまっているページです',
  //   Svg: require('../../static/img/download.svg').default,
  //   description: <>こちらから配布物をダウンロードできます。</>,
  // },
  //   {
  //     title: 'Powered by React',
  //     Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
  //     description: (
  //       <>
  //         Extend or customize your website layout by reusing React. Docusaurus can
  //         be extended while reusing the same header and footer.
  //       </>
  //     ),
  //   },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
