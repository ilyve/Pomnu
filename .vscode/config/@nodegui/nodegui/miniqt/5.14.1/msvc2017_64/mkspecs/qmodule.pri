EXTRA_INCLUDEPATH += C:\\openssl\\include C:\\Utils\\my_sql\\mysql-5.7.25-winx64\\include C:\\Utils\\postgresql\\pgsql\\include
EXTRA_LIBDIR += C:\\openssl\\lib C:\\Utils\\my_sql\\mysql-5.7.25-winx64\\lib C:\\Utils\\postgresql\\pgsql\\lib
QT_CPU_FEATURES.x86_64 = sse sse2
QT.global_private.enabled_features = sse2 alloca_malloc_h alloca avx2 dbus gui network relocatable sql system-zlib testlib widgets xml
QT.global_private.disabled_features = alloca_h android-style-assets private_tests dbus-linked dlopen gc_binaries libudev posix_fallocate reduce_exports reduce_relocations release_tools stack-protector-strong zstd
QT_COORD_TYPE = double
QMAKE_LIBS_ZLIB = -lzlib
CONFIG += sse2 aesni sse3 ssse3 sse4_1 sse4_2 avx avx2 avx512f avx512bw avx512cd avx512dq avx512er avx512ifma avx512pf avx512vbmi avx512vl compile_examples f16c force_debug_info largefile precompile_header rdrnd shani x86SimdAlways
QT_BUILD_PARTS += libs tools
QT_HOST_CFLAGS_DBUS += 
