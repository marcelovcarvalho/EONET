﻿using System;
namespace EONET.Classes.Dto
{
    public class DtoEventsFilterResquest
    {
        public DateTime? Date { get; set; }
        public string Status { get; set; }
        public int? IdCategory { get; set; }
    }
}
