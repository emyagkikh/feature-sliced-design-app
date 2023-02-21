import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { AppRouter } from 'app/providers/router';
import { Navbar, Sidebar } from 'widgets';
import { Loader } from 'shared/ui/Loader/Loader';

const App = () => {
  const { theme } = useTheme();

  return (
    <Suspense fallback={<Loader/>}>
      <div className={classNames('app', {}, [theme])}>
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
