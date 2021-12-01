import './app-catalog-listing.module.scss';
import Button from '@mui/material/Button';

/* eslint-disable-next-line */
export interface AppCatalogListingProps {}

export function AppCatalogListing(props: AppCatalogListingProps) {
  return (
    <div>
      <h1>Welcome to AppCatalogListing! <Button variant="contained">Hello World</Button></h1>
    </div>
  );
}

export default AppCatalogListing;
