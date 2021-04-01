namespace models
{
    public class RawUser
    {
        public int UserId { get; set; }
		public string firstName { get; set; }
		public string lastName { get; set; }
		public string email { get; set; }
        public string phone { get; set; }
        public string Password { get; set; }// comes from the {} in the system    
    }
}