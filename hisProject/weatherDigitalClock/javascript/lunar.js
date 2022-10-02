  /*
   * Copyright (c) 2006 Ho Ngoc Duc. All Rights Reserved.
   * Astronomical algorithms from the book "Astronomical Algorithms" by Jean Meeus, 1998
   *
   * Permission to use, copy, modify, and redistribute this software and its
   * documentation for personal, non-commercial use is hereby granted provided that
   * this copyright notice and appropriate documentation appears in all copies.
   * The algorithm is explained by Ho Ngoc Duc at "https://www.informatik.uni-leipzig.de/~duc/amlich/calrules_v02.html"
   */
  function abFunction(ac) {
    return Math.floor(ac);
  }
  function adFunction(ae) {
    return Math.sin(ae);
  }
  let ag = Math.PI,
    am = ag / 180;
  function pFunction(k, d) {
    let u,
      ah = k / 1236.85,
      ak = ah * ah,
      al = ak * ah;
    if (ah < -11) {
      u =
        0.001 +
        0.000839 * ah +
        0.0002261 * ak -
        0.00000845 * al -
        0.000000081 * ah * al;
    } else {
      u = -0.000278 + 0.000265 * ah + 0.000262 * ak;
    }
    return abFunction(
      2415020.75933 +
        29.53058868 * k +
        0.0001178 * ak -
        0.000000155 * al +
        0.00033 * adFunction((166.56 + 132.87 * ah - 0.009173 * ak) * am) +
        ((0.1734 - 0.000393 * ah) *
          adFunction(
            (359.2242 + 29.10535608 * k - 0.0000333 * ak - 0.00000347 * al) * am
          ) +
          0.0021 *
            adFunction(
              2 *
                am *
                (359.2242 + 29.10535608 * k - 0.0000333 * ak - 0.00000347 * al)
            ) -
          0.4068 *
            adFunction(
              (306.0253 + 385.81691806 * k + 0.0107306 * ak + 0.00001236 * al) *
                am
            ) +
          0.0161 *
            adFunction(
              am *
                2 *
                (306.0253 + 385.81691806 * k + 0.0107306 * ak + 0.00001236 * al)
            ) -
          0.0004 *
            adFunction(
              am *
                3 *
                (306.0253 + 385.81691806 * k + 0.0107306 * ak + 0.00001236 * al)
            ) +
          0.0104 *
            adFunction(
              am *
                2 *
                (21.2964 + 390.67050646 * k - 0.0016528 * ak - 0.00000239 * al)
            ) -
          0.0051 *
            adFunction(
              am *
                (359.2242 +
                  29.10535608 * k -
                  0.0000333 * ak -
                  0.00000347 * al +
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) -
          0.0074 *
            adFunction(
              am *
                (359.2242 +
                  29.10535608 * k -
                  0.0000333 * ak -
                  0.00000347 * al -
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) +
          0.0004 *
            adFunction(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) +
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ak -
                    0.00000347 * al))
            ) -
          0.0004 *
            adFunction(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) -
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ak -
                    0.00000347 * al))
            ) -
          0.0006 *
            adFunction(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) +
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) +
          0.001 *
            adFunction(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) -
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) +
          0.0005 *
            adFunction(
              am *
                (2 *
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al) +
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ak -
                    0.00000347 * al))
            )) -
        u +
        0.5 +
        d / 24
    );
  }
  function sFunction(t, d) {
    let ai = t - 0.5 - d / 24 - 2451545,
      aj = ai / 36525,
      an = ai / 36525,
      ao = an * an,
      ap = an * ao,
      aq = 357.5291 + 35999.0503 * an - 0.0001559 * ao - 0.00000048 * ap,
      ar = 357.5291 + 35999.0503 * an - 0.0001559 * ao - 0.00000048 * ap;
    return abFunction(
      (((280.46645 +
        36000.76983 * an +
        0.0003032 * ao +
        ((1.9146 - 0.004817 * an - 0.000014 * ao) * adFunction(am * aq) +
          (0.019993 - 0.000101 * an) * adFunction(am * 2 * aq) +
          0.00029 * adFunction(am * 3 * aq))) *
        am -
        ag *
          2 *
          abFunction(
            ((280.46645 +
              36000.76983 * an +
              0.0003032 * ao +
              ((1.9146 - 0.004817 * an - 0.000014 * ao) * adFunction(am * ar) +
                (0.019993 - 0.000101 * an) * adFunction(am * 2 * ar) +
                0.00029 * adFunction(am * 3 * ar))) *
              am) /
              (ag * 2)
          )) /
        ag) *
        6
    );
  }
  function qFunction(c, d) {
    let v, x, y;
    v =
      365 * (c + 4800) +
      abFunction((c + 4800) / 4) -
      abFunction((c + 4800) / 100) +
      abFunction((c + 4800) / 400) -
      31739;
    if (v < 2299161) {
      v = 365 * (c + 4800) + abFunction((c + 4800) / 4) - 31777;
    }
    x = pFunction(abFunction((v - 2415021) / 29.530588853), d);
    y = sFunction(x, d);
    if (y >= 9) {
      x = pFunction(abFunction((v - 2415021) / 29.530588853) - 1, d);
    }
    return x;
  }
  function rFunction(z, d) {
    let w, aa, k, i;
    k = abFunction((z - 2415021.076998695) / 29.530588853 + 0.5);
    w = 0;
    i = 1;
    aa = sFunction(pFunction(k + i, d), d);
    do {
      w = aa;
      i++;
      aa = sFunction(pFunction(k + i, d), d);
    } while (aa != w && i < 14);
    return i - 1;
  }
  function getLunar(a, b, c, d) {
    let e, f, g, h, i, j, k, m;
    m =
      a +
      abFunction((153 * (b + 12 * abFunction((14 - b) / 12) - 3) + 2) / 5) +
      365 * (c + 4800 - abFunction((14 - b) / 12)) +
      abFunction((c + 4800 - abFunction((14 - b) / 12)) / 4) -
      abFunction((c + 4800 - abFunction((14 - b) / 12)) / 100) +
      abFunction((c + 4800 - abFunction((14 - b) / 12)) / 400) -
      32045;
    if (m < 2299161) {
      m =
        a +
        abFunction((153 * (b + 12 * abFunction((14 - b) / 12) - 3) + 2) / 5) +
        365 * (c + 4800 - abFunction((14 - b) / 12)) +
        abFunction((c + 4800 - abFunction((14 - b) / 12)) / 4) -
        32083;
    }
    e = abFunction((m - 2415021.076998695) / 29.530588853);
    f = pFunction(e + 1, d);
    if (f > m) {
      f = pFunction(e, d);
    }
    i = m - f + 1;
    g = qFunction(c, d);
    h = g;
    if (g >= f) {
      k = c;
      g = qFunction(c - 1, d);
    } else {
      k = c + 1;
      h = qFunction(c + 1, d);
    }
    n = abFunction((f - g) / 29);
    l = 0;
    j = n + 11;
    if (h - g > 365) {
      o = rFunction(g, d);
      if (n >= o) {
        j = n + 10;
        if (n == o) {
          l = 1;
        }
      }
    }
    if (j > 12) {
      j = j - 12;
    }
    if (j >= 11 && n < 4) {
      k -= 1;
    }
    return [i, j, k, l];
  }
  /*
   * End!
   * Thank you Ho Ngoc Duc for the very useful Vietnamese lunar calculation algorithm!
   */
