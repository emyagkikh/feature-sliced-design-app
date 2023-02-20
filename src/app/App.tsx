import React, {Suspense} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar";

const App = () => {
    const {theme} = useTheme()

    return (
      <Suspense fallback={null}>
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