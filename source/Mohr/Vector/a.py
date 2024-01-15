from sympy.physics.units import *
from sympy import *

deg  =  pi/180

# Rounding:
import decimal
from decimal import Decimal as DX
from copy import deepcopy
def iso_round(obj, pv,
    rounding=decimal.ROUND_HALF_EVEN):
    import sympy
    """
    Rounding acc. to DIN EN ISO 80000-1:2013-08
    place value = Rundestellenwert
    """
    assert pv in set([
        # place value   #  round to:
        "1",              #  round to integer
        "0.1",            #  1st digit after decimal
        "0.01",           #  2nd
        "0.001",          #  3rd
        "0.0001",         #  4th
        "0.00001",        #  5th
        "0.000001",       #  6th
        "0.0000001",      #  7th
        "0.00000001",     #  8th
        "0.000000001",    #  9th
        "0.0000000001",   # 10th
        ])
    objc = deepcopy(obj)
    try:
        tmp = DX(str(float(objc)))
        objc = tmp.quantize(DX(pv), rounding=rounding)
    except:
        for i in range(len(objc)):
            tmp = DX(str(float(objc[i])))
            objc[i] = tmp.quantize(DX(pv), rounding=rounding)
    return objc

# ---

# Output precision:
prec = "0.01"

pprint("\n(x, y)-Comp's:")
v = Matrix([3 ,4])
tmp = v
pprint(tmp)

pprint("\nφ / deg:")
phi = 30 * deg
tmp = phi / deg
pprint(tmp)

pprint("\nR:")
c, s = cos(phi), sin(phi)
R = Matrix([[c ,s], [-s, c]])
pprint(R)

pprint("\n(x̄,ȳ)-Comp's:")
tmp = R*v
tmp = iso_round(tmp,prec)
pprint(tmp)