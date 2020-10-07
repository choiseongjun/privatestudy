import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import {Menu,Container,Image} from 'semantic-ui-react'
import NProgress from 'nprogress';

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

export default () => (
    <React.Fragment>
        <Head>
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>
    <Menu invented fixed="top" size="huge">
        <Container text>
            <Link href="/" prefetch passHref>
                <Menu.Item as='a' headen>
                    <Image
                        size="mini"
                        src="/static/moltin-light-hex.svg"
                        style={{marginRight:'1.5em'}}
                    />
                    NextJs Store
                </Menu.Item>
            </Link>
        </Container>
    </Menu>
    </React.Fragment>
)