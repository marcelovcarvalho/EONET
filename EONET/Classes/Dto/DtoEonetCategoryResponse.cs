using System;
using System.Collections.Generic;

namespace EONET.Classes.Dto
{
    public class DtoEonetCategoryResponse : DtoEonetResponse
    {
        public IEnumerable<DtoCategory> Categories { get; set; }
    }
}
