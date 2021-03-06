import React, {Fragment} from 'react'

import { Button } from 'react-bootstrap'

export default function Home(){
  return (
    <Fragment>
      <div className="cover-container pt-5 d-flex w-100 h-100 text-center justify-content-center flex-column">
        <main>
          <h1 className="pb-3">Manage your daily tasks well with {process.env.REACT_APP_WEBSITE_SHORTNAME}</h1>
          <p className="lead">{process.env.REACT_APP_WEBSITE_SHORTNAME} helps you organize your activities to get your tasks done on time without the hassle.</p>
          <p className="lead">
            <Button href="/learning-more" variant="info" size="lg" className="my-2 mx-3 fw-bold">Learn more</Button>
            <Button href="/getting-started" variant="primary" size="lg" className="my-2 mx-3 fw-bold">Get started</Button>
          </p>
        </main>
      </div>
    </Fragment>
  )
};
