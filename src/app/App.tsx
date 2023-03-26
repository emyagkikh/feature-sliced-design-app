import { Suspense } from 'react';
import { AppRouter } from 'app/providers/router';
import { Navbar, Sidebar } from 'widgets';
import { Loader } from 'shared/ui/Loader/Loader';

const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <div className={'app'}>
        <Navbar />
        <main className={'main'}>
          <Sidebar />
          <section className={'page'}>
            <AppRouter/>
          </section>
        </main>
      </div>
    </Suspense>
  );
};

export default App;
