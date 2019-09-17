window.onload = function () {
    const UTCDateTime = new Smart.Utilities.DateTime('2018/05/07 17:12:54:111222333444555666777888', 'UTC');

    document.getElementById('result1').innerHTML = UTCDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');

    const ESTDateTime = UTCDateTime.toTimeZone('Eastern Standard Time');

    document.getElementById('result2').innerHTML = ESTDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');

    const FLEDateTime = UTCDateTime.toTimeZone('FLE Standard Time');

    document.getElementById('result3').innerHTML = FLEDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');

    const CSTDateTime = new Smart.Utilities.DateTime('2018/05/07 17:12:54:111222333444555666777888', 'Central Standard Time');

    document.getElementById('result4').innerHTML = CSTDateTime.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');

    const UTCDateTime2 = CSTDateTime.toTimeZone('UTC');

    document.getElementById('result5').innerHTML = UTCDateTime2.toString('yyyy-MM-dd HH:mm:ss:fff:uu:nn:pp:ee:aa:xx:oo zzz');
}