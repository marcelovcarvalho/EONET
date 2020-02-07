using System;
using System.Collections;
using System.Collections.Generic;
using EONET.Classes.Dto;

namespace EONET.Interfaces
{
    public interface IEonetFilter
    {
        IEnumerable<DtoEvent> Filter(IEnumerable<DtoEvent> events, DtoEventsFilterResquest filter);
    }
}
