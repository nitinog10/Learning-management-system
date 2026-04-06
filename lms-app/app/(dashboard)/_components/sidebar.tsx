```tsx
import { Logo } from "./logo";
import SidebarRoutes from "./sidebar-routes";
import { useSidebarStyles } from "../../styles/sidebar";

export const Sidebar = () => {
    const classes = useSidebarStyles();
    return ( 
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <Logo />
            </div>
            <div className={classes.routesContainer}>
                <SidebarRoutes />
            </div>
        </div>
     );
}

export default Sidebar;
```

```tsx
// File: lms-app/app/styles/sidebar.ts

import { createUseStyles } from 'react-jss';

export const useSidebarStyles = createUseStyles({
    container: {
        height: '100%',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        backgroundColor: '#ffffff',
    },
    logoContainer: {
        padding: '24px',
    },
    routesContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
});
```