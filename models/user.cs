using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace models
{
	public class User
	{
		[Key]
		public int UserId { get; set; }
		public string firstName { get; set; }
		public string lastName { get; set; }
		public string email { get; set; }
        public string phone { get; set; }
        public byte[] PasswordHash { get; set; }//needed from user... but hashed behind the scenes
        public byte[] PasswordSalt { get; set; }// comes from the {} in the system      
	}
}