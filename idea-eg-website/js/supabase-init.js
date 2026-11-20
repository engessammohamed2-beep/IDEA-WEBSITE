window.SUPABASE_URL = "https://qqdqkpdclkvppdilbjdg.supabase.co";
window.SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxZHFrcGRjbGt2cHBkaWxiamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyODI0ODAsImV4cCI6MjEwMTg1ODQ4MH0.UV7ejhUMy7S4ayUonwpRDK3QfbgaAMy-6x42MYyE3cE";

window.getSupabaseClient = function () {
  if (!window._sbClient) {
    window._sbClient = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
  }
  return window._sbClient;
};
