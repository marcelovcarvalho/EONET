using System;
using System.Collections.Generic;

namespace EONET.Classes.Dto
{
    public class DtoEonetEventResponse : DtoEonetResponse
    {
        public IEnumerable<DtoEvent> Events { get; set; }
    }
}
