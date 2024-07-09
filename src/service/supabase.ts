import { createClient } from '@supabase/supabase-js';
// import.meta.env.VITE_APP_BASE_NAME
export default createClient(
  'https://refundable.staggerr.com',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaWdtZ2lwdXJ3bm90bGhsaWx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAyNDQ5NDgsImV4cCI6MjAzNTgyMDk0OH0.0YkEAsIUCKvGu2oET0O5H2JusoC0PNSil98ihAXwpxc'
);
