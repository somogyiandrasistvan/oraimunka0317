QUnit.module("leptetes metódus tesztelése", function () {
  QUnit.test("Lézetik-e a leptetes függvény?", function (assert) {
    assert.ok(leptetes, "Létezik a leptetes");
  });
  QUnit.test("Lézetik-e a leptetes függvény?", function (assert) {
    assert.ok(typeof leptetes === "function", "a leptetes függvény");
  });
  QUnit.test("leptetes(1, 2)", function (assert) {
    assert.equal(leptetes(1, 2), 3);
  });
  QUnit.test("leptetes(1, 0)", function (assert) {
    assert.equal(leptetes(1, 0), 1);
  });
  QUnit.test("leptetes(1, lista.length-1)", function (assert) {
    assert.equal(leptetes(1, lista.length - 1), 0);
  });
  QUnit.test("leptetes(-1, 2)", function (assert) {
    assert.equal(leptetes(-1, 2), 1);
  });
  QUnit.test("leptetes(-1, 0)", function (assert) {
    assert.equal(leptetes(-1, 0), lista.length - 1);
  });
  QUnit.test("leptetes(-1, lista.length-1)", function (assert) {
    assert.equal(leptetes(-1, lista.length - 1), lista.length - 2);
  });
  QUnit.module("osszeallit metódus tesztelése", function () {
    QUnit.test("A kiskepMegjelenit függvény létezik-e?", function (assert) {
      assert.ok(osszeallit, "lézetik-e a kiskepMegjelenit függvény!");
    });
    QUnit.test("teljes lista", function (assert) {
      let lista = [
        "kepek/alszik.jpg",
        "kepek/bocsok.jpg",
        "kepek/cirkusz.jpg",
        "kepek/eszik.jpg",
        "kepek/integet.jpg",
        "kepek/maci.jpg",
        "kepek/medve.jpg",
        "kepek/taj.jpg",
      ];
      assert.equal(
        osszeallit(lista),
        '<div><img src="kepek/alszik.jpg" alt=""></div><div><img src="kepek/bocsok.jpg">'
      );
    });
    QUnit.test("ütes lista", function (assert) {
      let lista = [];
      assert.equal(osszeallit(lista), "");
    });
    QUnit.test("egy elemű lista", function (assert) {
      let lista = ["kepek/alszik.jpg"];
      assert.equal(
        osszeallit(lista),
        '<div><img src="kepek/alszik.jpg" alt=""></div><div>'
      );
    });
  });
});
