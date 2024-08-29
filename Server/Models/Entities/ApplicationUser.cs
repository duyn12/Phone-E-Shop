﻿using Microsoft.AspNetCore.Identity;
using Server.Models.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models.Entities
{
    public class ApplicationUser : IdentityUser<int>, IHasId, IHasAudit, IHasSoftDelete
    {
        public string? FullName { get; set; }
        public string? JobTitle { get; set; }
        public string? Address { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Country { get; set; }
        public string? ZipCode { get; set; }
        public string? Avatar { get; set; }
        public bool IsDefaultAdmin { get; set; } = false;
        public bool IsOnline { get; set; } = false;


        //IHasAudit
        public int? CreatedByUserId { get; set; }
        public DateTime? CreatedAtUtc { get; set; }
        public int? UpdatedByUserId { get; set; }
        public DateTime? UpdatedAtUtc { get; set; }

        [NotMapped]
        public string? CreatedByUserName { get; set; }
        [NotMapped]
        public string? UpdatedByUserName { get; set; }
        [NotMapped]
        public string? CreatedAtString { get; set; }
        [NotMapped]
        public string? UpdatedAtString { get; set; }


        //IHasSoftDelete
        public bool IsNotDeleted { get; set; } = true;
    }
}