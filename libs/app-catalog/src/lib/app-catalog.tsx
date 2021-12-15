import './app-catalog.module.scss';
import {ReactElement} from "react";

/* eslint-disable-next-line */
export interface AppCatalogProps {
  editElement: ReactElement | null;
}

export function AppCatalog(props: AppCatalogProps) {
  return (
    <div>
      <h1>Welcome to AppCatalog!</h1>
    </div>
  );
}

export default AppCatalog;
