let right = 0
let left = 0
while (true) {
    left = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    right = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (left == 0 && right == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    } else if (left == 1 && right == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    } else if (left == 1 && right == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M2)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M1)
    }
}
