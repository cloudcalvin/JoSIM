* Mutual inductance Test
L1 1 0 10
L2 0 3 20
V2 3 0 PWL(0 0)
K1 L1 L2 0.5
IS 0 1 pwl(0 0 5m 1m)
.tran 1u 10m 0 1u
.print DEVI L1
.print DEVI L2
