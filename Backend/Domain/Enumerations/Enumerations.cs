using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace Domain.Enumerations
{
	public enum PhaseCode
	{
		Unknown = 0,
		N = 1,
		C = 2,
		CN = 3,
		B = 4,
		BN = 5,
		BC = 6,
		BCN = 7,
		A = 8,
		AN = 9,
		AC = 10,
		ACN = 11,
		AB = 12,
		ABN = 13,
		ABC = 14,
		ABCN = 15
	}
}
