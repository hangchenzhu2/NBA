import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';

// 使用React.lazy进行代码分割
const Home = React.lazy(() => import('./pages/Home'));
const ChartMaker = React.lazy(() => import('./pages/ChartMaker'));

const { Content } = Layout;

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout className="min-h-screen">
          <Header />
          <Content className="container mx-auto px-4 py-8">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chart-maker" element={<ChartMaker />} />
              </Routes>
            </Suspense>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </ErrorBoundary>
  );
}

export default App; 